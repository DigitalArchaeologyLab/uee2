from black import is_simple_decorator_expression
from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

# Register your models here.
from .models import Collection


class CollectionAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ("title_eng", "title_ar")


admin.site.register(Collection, CollectionAdmin)
