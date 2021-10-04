from django.shortcuts import render, redirect

from rest_framework import viewsets
from .serializers import MoveSerializer
from .models import Move

# Create your views here.
class MoveView(viewsets.ModelViewSet):
    serializer_class = MoveSerializer
    queryset = Move.objects.all()
# def move_list(request):

#     moves = Move.objects.all()
#     moves = moves.order_by('name')

#     print(moves)

#     return render (
#         request,
#         'grappledb/moves_list.html'
#         )