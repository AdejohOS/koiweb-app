from django.shortcuts import render

# Create your views here.


def testimony(request):
    context = {}
    return render(request, 'pages/testimonies.html', context)


def test_details(request):
    context = {}
    return render(request, 'pages/testimony_details.html', context)
