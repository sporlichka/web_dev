from django.http import HttpResponse, JsonResponse
 
 
def index(request):
    return JsonResponse({'Name' : 'Tom', 'Age' : 22})