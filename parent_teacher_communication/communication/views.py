from django.shortcuts import render

# Create your views here.
# views.py
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Message, User
from .serializers import MessageSerializer

@api_view(['POST'])
def send_message(request):
    sender = User.objects.get(id=request.data['sender_id'])
    recipient = User.objects.get(id=request.data['recipient_id'])
    content = request.data['content']

    message = Message.objects.create(sender=sender, recipient=recipient, content=content)
    message.save()

    return Response({'message': 'Message sent successfully!'})


# views.py
@api_view(['GET'])
def get_messages(request, sender_id, recipient_id):
    messages = Message.objects.filter(sender_id=sender_id, recipient_id=recipient_id) | \
               Message.objects.filter(sender_id=recipient_id, recipient_id=sender_id)
    messages = messages.order_by('timestamp')
    serializer = MessageSerializer(messages, many=True)
    
    return Response(serializer.data)


# views.py
from .models import Meeting
from .serializers import MeetingSerializer

@api_view(['POST'])
def schedule_meeting(request):
    parent = User.objects.get(id=request.data['parent_id'])
    teacher = User.objects.get(id=request.data['teacher_id'])
    meeting_date = request.data['meeting_date']
    agenda = request.data['agenda']

    meeting = Meeting.objects.create(parent=parent, teacher=teacher, meeting_date=meeting_date, agenda=agenda)
    meeting.save()

    return Response({'message': 'Meeting scheduled successfully!'})


# views.py
@api_view(['GET'])
def get_meetings(request, user_id):
    meetings = Meeting.objects.filter(parent_id=user_id) | \
               Meeting.objects.filter(teacher_id=user_id)
    serializer = MeetingSerializer(meetings, many=True)

    return Response(serializer.data)

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import StudentProgress
from .serializers import StudentProgressSerializer

@api_view(['POST'])
def submit_progress(request):
    serializer = StudentProgressSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Progress submitted successfully!"})
    return Response(serializer.errors, status=400)

@api_view(['GET'])
def get_progress(request, student_id):
    progress = StudentProgress.objects.filter(student__id=student_id)
    serializer = StudentProgressSerializer(progress, many=True)
    return Response(serializer.data)

