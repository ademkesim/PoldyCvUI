#pragma checksum "C:\PoldyProjects\PoldyCvUI2\PoldyCvUI\PoldyCvUI\Pages\LoginPage.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "4ae2d03c2dbd5907abd08acf64d6660089cd187a"
// <auto-generated/>
#pragma warning disable 1591
namespace PoldyCvUI.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#line 1 "C:\PoldyProjects\PoldyCvUI2\PoldyCvUI\PoldyCvUI\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#line 2 "C:\PoldyProjects\PoldyCvUI2\PoldyCvUI\PoldyCvUI\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#line 3 "C:\PoldyProjects\PoldyCvUI2\PoldyCvUI\PoldyCvUI\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#line 4 "C:\PoldyProjects\PoldyCvUI2\PoldyCvUI\PoldyCvUI\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#line 5 "C:\PoldyProjects\PoldyCvUI2\PoldyCvUI\PoldyCvUI\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#line 6 "C:\PoldyProjects\PoldyCvUI2\PoldyCvUI\PoldyCvUI\_Imports.razor"
using PoldyCvUI;

#line default
#line hidden
#line 7 "C:\PoldyProjects\PoldyCvUI2\PoldyCvUI\PoldyCvUI\_Imports.razor"
using PoldyCvUI.Shared;

#line default
#line hidden
    [Microsoft.AspNetCore.Components.RouteAttribute("/login")]
    public partial class LoginPage : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.AddMarkupContent(0, @"<div class=""container d-flex justify-content-center"" style=""padding-top: 9em;"">
    <form style=""background:whitesmoke"" class=""text-center border border-light p-5"" action=""#!""> 

        <p class=""h4 mb-4"">Giriş Yap</p>
        <input type=""email"" id=""loginMail"" class=""form-control mb-4"" placeholder=""E-mail"" required>
        <input type=""password"" id=""loginPassword"" class=""form-control mb-4"" placeholder=""Şifre"" required>

        <div class=""d-flex justify-content-around"">
            <div>
                <a href=""forget-password"">Şifreni mi unuttun?</a>
            </div>
        </div>

        <button class=""btn btn-info btn-block my-4"" type=""submit"">Giriş</button>
        <p>
            Üye değil misin?
            <a href=""register"">Üye ol</a>
        </p>

    </form>

</div>");
        }
        #pragma warning restore 1998
    }
}
#pragma warning restore 1591
