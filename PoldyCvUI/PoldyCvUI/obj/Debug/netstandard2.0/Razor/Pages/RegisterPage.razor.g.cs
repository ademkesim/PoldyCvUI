#pragma checksum "C:\PoldyProjects\PoldyCvUI\PoldyCvUI\PoldyCvUI\Pages\RegisterPage.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "94946b5f04612fffe88b4d35ceaa07322f2dcd4d"
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
#line 1 "C:\PoldyProjects\PoldyCvUI\PoldyCvUI\PoldyCvUI\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#line 2 "C:\PoldyProjects\PoldyCvUI\PoldyCvUI\PoldyCvUI\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#line 3 "C:\PoldyProjects\PoldyCvUI\PoldyCvUI\PoldyCvUI\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#line 4 "C:\PoldyProjects\PoldyCvUI\PoldyCvUI\PoldyCvUI\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#line 5 "C:\PoldyProjects\PoldyCvUI\PoldyCvUI\PoldyCvUI\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#line 6 "C:\PoldyProjects\PoldyCvUI\PoldyCvUI\PoldyCvUI\_Imports.razor"
using PoldyCvUI;

#line default
#line hidden
#line 7 "C:\PoldyProjects\PoldyCvUI\PoldyCvUI\PoldyCvUI\_Imports.razor"
using PoldyCvUI.Shared;

#line default
#line hidden
    [Microsoft.AspNetCore.Components.RouteAttribute("/register")]
    public partial class RegisterPage : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.AddMarkupContent(0, @"<div class=""container d-flex justify-content-center"" style=""padding-top: 5em;"">
    <form style=""background:whitesmoke"" class=""text-center border border-light p-5"" action=""#!"">

        <p class=""h4 mb-4"">Kaydol</p>
        <input type=""text"" id=""firstName"" class=""form-control mb-4"" placeholder=""Ad"" required>
        <input type=""text"" id=""lastName"" class=""form-control mb-4"" placeholder=""Soyad"" required>
        <input type=""email"" id=""resgisterMail"" class=""form-control mb-4"" placeholder=""E-mail"" required>
        <input type=""password"" id=""registerPassword"" class=""form-control mb-4"" placeholder=""Şifre"" required>
        <input type=""password"" id=""registerPasswordAgain"" class=""form-control mb-4"" placeholder=""Şifrenizi Tekrar Girin"" required>

        <button class=""btn btn-info btn-block my-4"" type=""submit"">Kaydol</button>
        <p>
            Hesabın var mı?
            <a href>Giriş Yap</a>
        </p>

    </form>

</div>");
        }
        #pragma warning restore 1998
    }
}
#pragma warning restore 1591
