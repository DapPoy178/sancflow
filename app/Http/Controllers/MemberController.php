<?php

namespace App\Http\Controllers;

use App\Models\Students;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MemberController extends Controller
{
    public function index()
    {
        $transactions = Transaction::orderBy('id', 'desc')->get()->groupBy('student_id');
        $students = Students::with('asrama')->where('asrama_id', Auth::user()->asrama_id)->get();
        $students->each(function ($student) use ($transactions) {
            $student->transaction = $transactions->get($student->id, collect())->first();
            if ($student->transaction) {
                $student->transaction->last_total_fund = number_format($student->transaction->last_total_fund, 2, '.', ',');
            }
        });


        return Inertia::render('Member/Member', ['student' => $students]);
    }

    public function details($id)
    {
        $transactions = Transaction::orderBy('id', 'desc')->get()->groupBy('student_id');
        $students = Students::with('asrama')->where('id', $id)->get();
        $students->each(function ($student) use ($transactions) {
            $student->transaction = $transactions->get($student->id, collect())->first();
            if ($student->transaction) {
                $student->transaction->last_total_fund = number_format($student->transaction->last_total_fund, 2, '.', ',');
            }
        });

        $record = Students::with('asrama', 'transaction')->where('id', $id)->find($id);
        $data = Students::with('asrama', 'transaction')->where('id', $id)->find($id);

        $incomeTransactions = $data->transaction->where('status', 'income');
        $data->income = $incomeTransactions->sum('total');
        $data->income = number_format($data->income, 2, '.', ',');

        $outcomeTransactions = $data->transaction->where('status', 'outcome');
        $data->outcome = $outcomeTransactions->sum('total');
        $data->outcome = number_format($data->outcome, 2, '.', ',');


        return Inertia::render('Member/MembersDetails', ['data' => $data, 'student' => $students, 'record' => $record]);
    }
}
