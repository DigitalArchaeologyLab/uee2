from django.contrib import admin
from treebeard.admin import TreeAdmin
from treebeard.forms import movenodeform_factory

### Register and setup models ###
from .models import Place

admin.site.register(Place)

from .models import Feature

admin.site.register(Feature)

from .models import Phase

admin.site.register(Phase)

from .models import Dynasty

admin.site.register(Dynasty)

from .models import Reign

admin.site.register(Reign)

from .models import Event

admin.site.register(Event)

from .models import Period


class PeriodAdmin(TreeAdmin):
    form = movenodeform_factory(Period)


admin.site.register(Period, PeriodAdmin)
