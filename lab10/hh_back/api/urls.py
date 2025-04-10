from django.urls import path
from . import views
from .views_cbv import CompanyList, CompanyDetail

urlpatterns = [
    # Function-based views
    path('companies/', views.company_list, name='company-list'),
    path('companies/<int:id>/', views.company_detail, name='company-detail'),
    path('companies/<int:id>/vacancies/', views.company_vacancies, name='company-vacancies'),
    path('vacancies/', views.vacancy_list, name='vacancy-list'),
    path('vacancies/<int:id>/', views.vacancy_detail, name='vacancy-detail'),
    path('vacancies/top_ten/', views.top_ten_vacancies, name='top-ten-vacancies'),
    
    # Class-based views
    path('cbv/companies/', CompanyList.as_view(), name='cbv-company-list'),
    path('cbv/companies/<int:id>/', CompanyDetail.as_view(), name='cbv-company-detail'),
]