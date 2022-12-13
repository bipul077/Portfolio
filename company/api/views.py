from rest_framework import viewsets
from company.models import Contact
from company.api.serializers import ContactSerializer


class ContactModelViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer