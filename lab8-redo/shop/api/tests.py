from django.test import TestCase
from django.http import JsonResponse
from .models import Product, Category
def product_detail(request, id):
    product = Product.objects.get(id=id)
    data = {
        'id' : product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category': product.category.name
    }
    return JsonResponse(data)
