<?php

namespace App\Http\Controllers;

use App\Models\Students;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FundAddController extends Controller
{
    public function index($id) {
        $student = Students::find($id);
        return Inertia::render('Transaction/FundAdd', ['student' => $student]);
    }

    public function store(Request $request, $id){
        $request->validate([
            'desc' => 'required|max:255',
            'total' => 'required|numeric',
        ]);
    
        $request['status'] = 'income';
        $request['date'] = Carbon::now()->toDateString();
        $prev_last_total_fund = Transaction::orderBy('id', 'desc')->where('student_id', $id)->skip(0)->take(1)->pluck('last_total_fund')->first();
        
        if ($prev_last_total_fund !== 0 && !is_null($prev_last_total_fund)) {
            $request['last_total_fund'] = $prev_last_total_fund + $request->total;
        } else {
            $request['last_total_fund'] = $request->total;
        }

        $request['student_id'] = $id;
    
        $add = Transaction::create($request->all());
    
        return to_route('members-details', ['id' => $id])->with('message', 'Fund Added Successfully');
    }
}
