from django.http import HttpResponse, JsonResponse
from .models import Category, Product

def product_list(request):
    products = Product.objects.all()
    data = [{
        'id': p.id,
        'name': p.name,
        'price': p.price,
        'description': p.description,
        'count': p.count,
        'is_active': p.is_active,
        'category': p.category.name
    } for p in products]
    return JsonResponse(data, safe=False)

def Product_detail(request, id):
    product = Product.objects.get(id = id)
    data = {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category': product.category.name
    }
    return JsonResponse(data)

def category_list(request):
    categories = Category.objects.all()
    data = [{'id':c.id, 'name':c.name} for c in categories]
    return JsonResponse(data, safe=False)

def category_detail(request, id):
    category = Category.objects.get(id = id)
    data = {'id':category.id, 'name':category.name}
    return JsonResponse(data)

def products_by_category(request, id):
    products = Product.objects.filter(category_id = id)
    data =[{'id':p.id, 'name':p.name, 'price':p.price}for p in products]
    return JsonResponse(data, safe = False)