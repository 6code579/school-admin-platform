from django.shortcuts import render
from rest_framework import viewsets
from .models import Student
from .serializers import StudentSerializer

# Create your views here.

class StudentViewSet(viewsets.ModelViewSet):
    """
    ViewSet pour gérer les étudiants.
    Fournit les opérations CRUD complètes.
    """
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
