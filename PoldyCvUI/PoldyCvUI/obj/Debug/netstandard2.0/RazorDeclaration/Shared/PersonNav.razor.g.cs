#pragma checksum "C:\Users\Ferit\Source\Repos\PoldyCvUI\PoldyCvUI\PoldyCvUI\Shared\PersonNav.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "4b8ea0de2bef2881676f7b2bd9564711dd3e0cc0"
// <auto-generated/>
#pragma warning disable 1591
#pragma warning disable 0414
#pragma warning disable 0649
#pragma warning disable 0169

namespace PoldyCvUI.Shared
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#line 1 "C:\Users\Ferit\Source\Repos\PoldyCvUI\PoldyCvUI\PoldyCvUI\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#line 2 "C:\Users\Ferit\Source\Repos\PoldyCvUI\PoldyCvUI\PoldyCvUI\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#line 3 "C:\Users\Ferit\Source\Repos\PoldyCvUI\PoldyCvUI\PoldyCvUI\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#line 4 "C:\Users\Ferit\Source\Repos\PoldyCvUI\PoldyCvUI\PoldyCvUI\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#line 5 "C:\Users\Ferit\Source\Repos\PoldyCvUI\PoldyCvUI\PoldyCvUI\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#line 6 "C:\Users\Ferit\Source\Repos\PoldyCvUI\PoldyCvUI\PoldyCvUI\_Imports.razor"
using PoldyCvUI;

#line default
#line hidden
#line 7 "C:\Users\Ferit\Source\Repos\PoldyCvUI\PoldyCvUI\PoldyCvUI\_Imports.razor"
using PoldyCvUI.Shared;

#line default
#line hidden
    public partial class PersonNav : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
        }
        #pragma warning restore 1998
#line 52 "C:\Users\Ferit\Source\Repos\PoldyCvUI\PoldyCvUI\PoldyCvUI\Shared\PersonNav.razor"
       
    private bool collapseNavMenu = true;

    private string NavMenuCssClass => collapseNavMenu ? "collapse" : null;

    private void ToggleNavMenu()
    {
        collapseNavMenu = !collapseNavMenu;
    }


#line default
#line hidden
    }
}
#pragma warning restore 1591
