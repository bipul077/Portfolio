from rest_framework import serializers
from company.models import Contact


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact