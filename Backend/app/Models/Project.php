<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Models\User;

class Project extends Model
{
    use HasFactory;

     /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'uuid',
        'color', 
        'deadline',
        'budget',
        'description',
    ];


    /**
     * On create
     */
    protected static function boot()
    {
        parent::boot();

        // Automatically generate UUID when creating a new model
        static::creating(function ($model) {
            if (empty($model->uuid)) {
                $model->uuid = Str::uuid()->toString(); 
            }
        });
    }


    /**
     * The users that belong to the project.
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'project_user');
    }

}
