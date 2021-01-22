from django.shortcuts import render


def handler404(request, exception):
    response = render(request, "errors/404.html")
    response.status_code = 404
    return response


def handler500(request):
    response = render(request, "errors/500.html")
    response.status_code = 500
    return response
