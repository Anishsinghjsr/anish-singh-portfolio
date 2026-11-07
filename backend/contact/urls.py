from django.urls import path
from .views import send_contact_message

urlpatterns = [
    path("send/", send_contact_message, name="send_contact_message"),
]