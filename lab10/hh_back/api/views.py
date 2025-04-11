from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from django.http import HttpRequest, HttpResponse

# Create your views here.

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

@api_view(['GET'])
def company_list(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return HttpResponse('Company List')
    # return Response(serializer.data)

@api_view(['GET'])
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)
    serializer = CompanySerializer(company)
    return HttpResponse('Company Details')
    # return Response(serializer.data)

@api_view(['GET'])
def company_vacancies(request, company_id):
    vacancies = Vacancy.objects.filter(company_id=company_id)
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return HttpResponse('Vacancy List')
    # return Response(serializer.data)

@api_view(['GET'])
def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist:
        return Response({'error': 'Vacancy not found'}, status=status.HTTP_404_NOT_FOUND)
    serializer = VacancySerializer(vacancy)
    return HttpResponse('Vacancy detail')
    # return Response(serializer.data)

@api_view(['GET'])
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return HttpResponse('Top ten Vacancies')
    # return Response(serializer.data)
