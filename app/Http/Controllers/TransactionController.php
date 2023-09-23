<?php

namespace App\Http\Controllers;

use App\Models\Students;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function index()
    {
        $latestTransaction = Students::join('transactions', 'students.id', '=', 'transactions.student_id')
            ->join('asrama', 'students.asrama_id', '=', 'asrama.id')
            ->join('users', 'asrama.id', '=', 'users.asrama_id')
            ->select('students.*', 'transactions.*')
            ->where('users.id', auth()->user()->id)
            ->orderBy('transactions.id', 'desc')
            ->get();

        return Inertia::render('Transaction', ['latestTransaction' => $latestTransaction]);
    }
}