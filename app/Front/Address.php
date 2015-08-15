<?php

namespace App\Front;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = [
        'customer_id',
        'type',
        'number',
        'street',
        'area',
        'city',
        'state',
        'zip_code',
        'country'
    ];

    public function scopeBilling()
    {
        return $this->where('type', '=', 'BILLING');
    }

    public function scopeShipping()
    {
        return $this->where('type', '=', 'SHIPPING');
    }
    
   public function scopeOfCustomerId($query,$customerId)
    {
        return $query->where('customer_id', '=', $customerId);
    }
}
