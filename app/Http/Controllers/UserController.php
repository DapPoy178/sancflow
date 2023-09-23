<?php

namespace App\Http\Controllers;

use App\Models\Students;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $user = User::with('asrama', 'role')->where('role_id', 2)->get();

        return Inertia::render('Users/Users', ['user' => $user]);
    }

    public function show($id, $asrama_id)
    {
        $data = User::with('asrama', 'role')->find($id);

        $transactions = Transaction::orderBy('id', 'desc')->get()->groupBy('student_id');
        $students = Students::with('asrama')->where('asrama_id', $asrama_id)->get();
        $students->each(function ($student) use ($transactions) {
            $student->transaction = $transactions->get($student->id, collect())->first();
            if ($student->transaction) {
                $student->transaction->last_total_fund = number_format($student->transaction->last_total_fund, 2, '.', ',');
            }
        });
        return Inertia::render('Users/UsersDetails', ['data' => $data, 'student' => $students]);
    }
}
