from rest_framework import viewsets
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .serializer import UserSerializer
# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer
    queryset = get_user_model().objects.all()

    def create(self, request):
        print("triggered the create")
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = User.objects.create_user(**serializer.validated_data)
            return Response({'status': 'success'})
        else:
            return Response(serializer.errors, status=400)