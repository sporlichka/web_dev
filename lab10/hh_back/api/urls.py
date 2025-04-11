from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CompanyViewSet, company_vacancies

router = DefaultRouter()
router.register(r'companies', CompanyViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('companies/<int:company_id>/vacancies/', company_vacancies, name='company-vacancies'),
]

