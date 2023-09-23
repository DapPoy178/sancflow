<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Asrama extends Model
{
    use HasFactory;
    use SoftDeletes;

    public $timestamps = false;

    protected $table = 'asrama';

    protected $fillable = [
        'name'
    ]; 

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function student()
    {
        return $this->hasMany(Students::class);
    }

    public function stutu()
    {
        return $this->belongsTo(Transaction::class, 'student_id');
    }
}
