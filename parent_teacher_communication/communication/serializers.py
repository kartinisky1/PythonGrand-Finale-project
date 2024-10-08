# serializers.py
from rest_framework import serializers
from .models import Message, Meeting

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['sender', 'recipient', 'content', 'timestamp']

class MeetingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meeting
        fields = ['parent', 'teacher', 'meeting_date', 'agenda']


from rest_framework import serializers
from .models import StudentProgress

class StudentProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentProgress
        fields = '__all__'
