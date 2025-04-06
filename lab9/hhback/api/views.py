from rest_framework import generics
from .models import Company, Vacancy
from .serializers import Company_serializer, Vacancy_serializer
# Write API endpoints with JSON format:
# /api/companies - List of all Companies
# /api/companies/<int:id>/ - Get one Company
# /api/companies/<int:id>/vacancies/ - List of Vacancies by Company
# /api/vacancies/ - List of all Vacancies
# /api/vacancies/<int:id>/ - Get one Vacancy
# /api/vacancies/top_ten/ - List of top 10 vacancies sorted by decreasing salary

# Create your views here.
class CompanyList(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = Company_serializer

class CompanyDetail(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = Company_serializer

class CompanyVacanciesList(generics.ListAPIView):
    serializer_class = Vacancy_serializer
    
    def get_queryset(self):
        company_id = self.kwargs['id']
        return Vacancy.objects.filter(company_id=company_id)

class VacancyList(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = Vacancy_serializer

class VacancyDetail(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = Vacancy_serializer

class TopTenVacanciesList(generics.ListAPIView):
    serializer_class = Vacancy_serializer
    queryset = Vacancy.objects.order_by('-salary')[:10]
