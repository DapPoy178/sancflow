<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\Students;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
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
        
        $lastTotalFund = [];
        foreach ($students as $student) {
            $lastTotalFund[] = intval(str_replace(',', '', $student->transaction->last_total_fund));
        }
        
        $totalLastTotalFund = array_sum($lastTotalFund);
        $formattedLastTotalFund = number_format($totalLastTotalFund, 2, '.', ',');
        
        $latestTransaction = Students::join('transactions', 'students.id', '=', 'transactions.student_id')
            ->join('asrama', 'students.asrama_id', '=', 'asrama.id')
            ->join('users', 'asrama.id', '=', 'users.asrama_id')
            ->select('students.*', 'transactions.*')
            ->where('users.id', auth()->user()->id)
            ->orderBy('transactions.id', 'desc')
            ->get();

        $totalStudents = Students::with('asrama')->where('asrama_id', Auth::user()->asrama_id)->count();
            
        return Inertia::render('Dashboard', ['latestTransaction' => $latestTransaction, 'total' => $formattedLastTotalFund, 'totalStudents' => $totalStudents]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
