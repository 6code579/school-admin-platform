from django.core.management.base import BaseCommand
from core.models import Student

class Command(BaseCommand):
    help = 'Crée des étudiants de test pour l\'application'

    def handle(self, *args, **options):
        students_data = [
            {'name': 'Marie Dupont', 'email': 'marie.dupont@email.com', 'age': 20},
            {'name': 'Jean Martin', 'email': 'jean.martin@email.com', 'age': 22},
            {'name': 'Sophie Bernard', 'email': 'sophie.bernard@email.com', 'age': 19},
            {'name': 'Pierre Durand', 'email': 'pierre.durand@email.com', 'age': 21},
            {'name': 'Emma Leroy', 'email': 'emma.leroy@email.com', 'age': 23},
        ]

        created_count = 0
        for student_data in students_data:
            student, created = Student.objects.get_or_create(
                email=student_data['email'],
                defaults=student_data
            )
            if created:
                created_count += 1
                self.stdout.write(
                    self.style.SUCCESS(f'Étudiant créé: {student.name}')
                )
            else:
                self.stdout.write(
                    self.style.WARNING(f'Étudiant existe déjà: {student.name}')
                )

        self.stdout.write(
            self.style.SUCCESS(f'{created_count} nouveaux étudiants créés avec succès!')
        ) 