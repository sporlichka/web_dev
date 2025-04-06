from django.contrib import admin
from django.urls import path, include
from api import views
apipatterns = [
    path('companies/', views.CompanyList.as_view()),
    path('companies/<int:id>/', views.CompanyDetail.as_view()),
    path('companies/<int:id>/vacancies/', views.CompanyVacanciesList.as_view()),
    path('vacancies/', views.VacancyList.as_view()),
    path('vacancies/<int:id>/', views.VacancyDetail.as_view()),
    path('vacancies/top_ten/', views.TopTenVacanciesList.as_view()),
]
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(apipatterns)),
]