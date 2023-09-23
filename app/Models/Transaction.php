<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'date',
        'desc',
        'total',
        'last_total_fund',
        'student_id',
        'status',
    ];

    // public function student()
    // {
    //     return $this->belongsTo(Students::class, 'student_id');
    // }

    public function student()
    {
        return $this->belongsTo(Students::class);
    }

    public function transaction()
    {
        return $this->belongsTo(Students::class, 'id');
    }

}
