from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class Student(models.Model):
    name = models.CharField(max_length=100, verbose_name="Nom")
    email = models.EmailField(unique=True, verbose_name="Email")
    age = models.IntegerField(verbose_name="Âge")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Date de création")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Date de modification")

    class Meta:
        verbose_name = "Étudiant"
        verbose_name_plural = "Étudiants"
        ordering = ['name']

    def __str__(self):
        return f"{self.name} ({self.email})"

class CustomUser(AbstractUser):
    email = models.EmailField('email address', unique=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.email
