from rest_framework import serializers
from .models import Student
from dj_rest_auth.registration.serializers import RegisterSerializer

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'name', 'email', 'age', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']

class CustomRegisterSerializer(RegisterSerializer):
    def get_cleaned_data(self):
        data_dict = super().get_cleaned_data()
        data_dict.pop('username', None)
        return data_dict 