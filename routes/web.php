<?php

use App\Http\Controllers\AsramaController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DashboardAdminController;
use App\Http\Controllers\FundAddController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\StudentsController;
use App\Http\Controllers\TransactionAddController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Auth/Login');
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::middleware('only_admin')->group(function () {

        Route::get('/dashboard-admin', [DashboardAdminController::class, 'index'])->name('dashboard-admin');
        
        Route::get('/users', [UserController::class, 'index'])->name('users');
        Route::get('/users-details/{id}/{asrama_id}', [UserController::class, 'show']);
        
        Route::get('/users-create', [RegisteredUserController::class, 'create'])->name('users-create');
        Route::post('/users-create', [RegisteredUserController::class, 'store']);
        
        Route::get('/add-asrama', [AsramaController::class, 'create'])->name('add-asrama');
        Route::post('/add-asrama', [AsramaController::class, 'store'])->name('add-asrama');
    
        Route::get('/add-student', [StudentsController::class, 'create'])->name('add-student');
        Route::post('/add-student', [StudentsController::class, 'store'])->name('add-student');
    
        Route::get('/add', function () {
            return Inertia::render('Add/Add');
        })->name('add');

    });

    Route::middleware('only_teacher')->group(function () {
        
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

        Route::get('/transaction', [TransactionController::class, 'index'])->name('transaction');

        Route::get('/members-details/transaction-add/{id}', [TransactionAddController::class, 'index']);
        Route::post('/members-details/transaction-add/{id}', [TransactionAddController::class, 'store'])->name('transaction-add');

        Route::get('/members-details/fund-add/{id}', [FundAddController::class, 'index']);
        Route::post('/members-details/fund-add/{id}', [FundAddController::class, 'store'])->name('fund-add');
        
    });
    
    Route::get('/member', [MemberController::class, 'index'])->name('member');
    Route::get('/members-details/{id}', [MemberController::class, 'details'])->name('members-details');
    


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
