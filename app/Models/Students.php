<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Students extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'name',
        'asrama_id'
    ];

    public function asrama()
    {
        return $this->belongsTo(Asrama::class);
    }

    public function transaction()
    {
        return $this->hasMany(Transaction::class, 'student_id');
    }

}
