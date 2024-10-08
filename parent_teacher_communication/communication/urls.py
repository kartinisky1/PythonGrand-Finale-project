# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('api/send_message/', views.send_message, name='send_message'),
    path('api/messages/<int:sender_id>/<int:recipient_id>/', views.get_messages, name='get_messages'),
    path('api/schedule_meeting/', views.schedule_meeting, name='schedule_meeting'),
    path('api/meetings/<int:user_id>/', views.get_meetings, name='get_meetings'),
]


from django.urls import path
from . import views

urlpatterns = [
    path('submit_progress/', views.submit_progress, name='submit_progress'),
    path('get_progress/<int:student_id>/', views.get_progress, name='get_progress'),
]

