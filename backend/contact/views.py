from django.conf import settings
from django.core.mail import send_mail

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["POST"])
def send_contact_message(request):
    name = request.data.get("name")
    email = request.data.get("email")
    subject = request.data.get("subject")
    message = request.data.get("message")

    if not name or not email or not subject or not message:
        return Response(
            {"error": "All fields are required."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    try:
        send_mail(
            subject=f"Portfolio Contact: {subject}",
            message=(
                f"Name: {name}\n"
                f"Email: {email}\n\n"
                f"Message:\n{message}"
            ),
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.DEFAULT_FROM_EMAIL],
            fail_silently=False,
        )

        return Response(
            {"message": "Message sent successfully."},
            status=status.HTTP_200_OK,
        )

    except Exception:
        return Response(
            {"error": "Email could not be sent."},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )
