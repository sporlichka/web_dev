from rest_framework import serializers
from .models import Company, Vacancy

class Company_serializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class Vacancy_serializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = '__all__'