from django.db import models
# models.py
from django.db import models

class User(models.Model):
    ROLE_CHOICES = (
        ('parent', 'Parent'),
        ('teacher', 'Teacher'),
    )
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

    def __str__(self):
        return self.username

class Message(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_messages')
    recipient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_messages')
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Message from {self.sender} to {self.recipient} at {self.timestamp}'

class Meeting(models.Model):
    teacher = models.ForeignKey(User, on_delete=models.CASCADE, related_name='meetings')
    parent = models.ForeignKey(User, on_delete=models.CASCADE, related_name='meetings')
    meeting_date = models.DateTimeField()
    agenda = models.TextField()

    def __str__(self):
        return f'Meeting between {self.parent} and {self.teacher} on {self.meeting_date}'

# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class StudentProgress(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE)  # Connect to the student
    subject = models.CharField(max_length=100)
    comments = models.TextField()
    date = models.DateField(auto_now_add=True)  # Automatically set the current date

    def __str__(self):
        return f"{self.student.username} - {self.subject}"

