#pragma checksum "C:\PoldyProjects\PoldyCvUI\PoldyCvUI\PoldyCvUI\Pages\UpdateCv.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "377c6c4f1374c3a561900d1b5fa1ff9a6f009f33"
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
    [Microsoft.AspNetCore.Components.RouteAttribute("/update-cv")]
    public partial class UpdateCv : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenElement(0, "div");
            __builder.AddAttribute(1, "class", "row");
            __builder.AddMarkupContent(2, "\r\n        ");
            __builder.OpenElement(3, "div");
            __builder.AddAttribute(4, "class", "bd-example col-6");
            __builder.AddMarkupContent(5, "\r\n            ");
            __builder.AddMarkupContent(6, "<strong>Kişisel Bilgiler</strong><hr>\r\n            ");
            __builder.OpenElement(7, "form");
            __builder.AddMarkupContent(8, "\r\n                ");
            __builder.AddMarkupContent(9, "<div class=\"form-group\">\r\n                    <label for=\"photo\">Fotğoraf</label>\r\n                    <input type=\"file\" class=\"form-control-file\" id=\"photo\" accept=\"image/png, image/jpeg\" required>\r\n                </div>\r\n                ");
            __builder.AddMarkupContent(10, @"<div class=""form-group row"">
                    <label for=""firstName"" class=""col-sm-3 col-form-label"">Ad</label>
                    <div class=""col-sm-7"">
                        <input type=""text"" class=""form-control"" id=""firstName"" placeholder=""Adınız"" required>
                    </div>
                </div>
                ");
            __builder.AddMarkupContent(11, @"<div class=""form-group row"">
                    <label for=""lastName"" class=""col-sm-3 col-form-label"">Soyad</label>
                    <div class=""col-sm-7"">
                        <input type=""text"" class=""form-control"" id=""lastName"" placeholder=""Soyadınız"" required>
                    </div>
                </div>
                ");
            __builder.AddMarkupContent(12, @"<div class=""form-group row"">
                    <label for=""dateOfBirth"" class=""col-sm-3 col-form-label"">Doğum Tarihi</label>
                    <div class=""col-sm-7"">
                        <input required type=""date"" class=""form-control"" id=""dateOfBirth"">
                    </div>
                </div>
                ");
            __builder.AddMarkupContent(13, @"<div class=""form-group row"">
                    <label for=""placeOfBirth"" class=""col-sm-3 col-form-label"">Doğum Yeri</label>
                    <div class=""col-sm-7"">
                        <input required type=""text"" class=""form-control"" id=""placeOfBirth"" placeholder=""Doğum yeriniz"">
                    </div>
                </div>
                ");
            __builder.OpenElement(14, "div");
            __builder.AddAttribute(15, "class", "form-group row");
            __builder.AddMarkupContent(16, "\r\n                    ");
            __builder.AddMarkupContent(17, "<label for=\"maritalStatus\" class=\"col-sm-3 col-form-label\">Medeni Durum</label>\r\n                    ");
            __builder.OpenElement(18, "div");
            __builder.AddAttribute(19, "class", "col-sm-7");
            __builder.AddMarkupContent(20, "\r\n                        ");
            __builder.OpenElement(21, "select");
            __builder.AddAttribute(22, "required", true);
            __builder.AddAttribute(23, "id", "maritalStatus");
            __builder.AddAttribute(24, "class", "form-control");
            __builder.AddMarkupContent(25, "\r\n                            ");
            __builder.OpenElement(26, "option");
            __builder.AddAttribute(27, "selected", true);
            __builder.AddAttribute(28, "disabled", true);
            __builder.AddMarkupContent(29, "Seçiniz");
            __builder.CloseElement();
            __builder.AddMarkupContent(30, "\r\n                            ");
            __builder.OpenElement(31, "option");
            __builder.AddAttribute(32, "value", "1");
            __builder.AddContent(33, "Evli");
            __builder.CloseElement();
            __builder.AddMarkupContent(34, "\r\n                            ");
            __builder.OpenElement(35, "option");
            __builder.AddAttribute(36, "value", "2");
            __builder.AddContent(37, "Bekar");
            __builder.CloseElement();
            __builder.AddMarkupContent(38, "\r\n                        ");
            __builder.CloseElement();
            __builder.AddMarkupContent(39, "\r\n                    ");
            __builder.CloseElement();
            __builder.AddMarkupContent(40, "\r\n                ");
            __builder.CloseElement();
            __builder.AddMarkupContent(41, "\r\n            ");
            __builder.CloseElement();
            __builder.AddMarkupContent(42, "\r\n        ");
            __builder.CloseElement();
            __builder.AddMarkupContent(43, "\r\n        ");
            __builder.OpenElement(44, "div");
            __builder.AddAttribute(45, "class", "bd-example col-6");
            __builder.AddMarkupContent(46, "\r\n            ");
            __builder.AddMarkupContent(47, "<strong>Eğitim Bilgileri</strong><hr>\r\n            ");
            __builder.OpenElement(48, "form");
            __builder.AddMarkupContent(49, "\r\n                ");
            __builder.OpenElement(50, "div");
            __builder.AddAttribute(51, "class", "form-group row");
            __builder.AddMarkupContent(52, "\r\n                    ");
            __builder.AddMarkupContent(53, "<label for=\"eduStatus\" class=\"col-sm-3 col-form-label\">Eğitim Durumu</label>\r\n                    ");
            __builder.OpenElement(54, "div");
            __builder.AddAttribute(55, "class", "col-sm-7");
            __builder.AddMarkupContent(56, "\r\n                        ");
            __builder.OpenElement(57, "select");
            __builder.AddAttribute(58, "required", true);
            __builder.AddAttribute(59, "id", "eduStatus");
            __builder.AddAttribute(60, "class", "form-control");
            __builder.AddMarkupContent(61, "\r\n                            ");
            __builder.OpenElement(62, "option");
            __builder.AddAttribute(63, "selected", true);
            __builder.AddAttribute(64, "disabled", true);
            __builder.AddMarkupContent(65, "Seçiniz");
            __builder.CloseElement();
            __builder.AddMarkupContent(66, "\r\n                            ");
            __builder.OpenElement(67, "option");
            __builder.AddAttribute(68, "value", "1");
            __builder.AddMarkupContent(69, "İlköğretim");
            __builder.CloseElement();
            __builder.AddMarkupContent(70, "\r\n                            ");
            __builder.OpenElement(71, "option");
            __builder.AddAttribute(72, "value", "2");
            __builder.AddMarkupContent(73, "Orta Öğretim");
            __builder.CloseElement();
            __builder.AddMarkupContent(74, "\r\n                            ");
            __builder.OpenElement(75, "option");
            __builder.AddAttribute(76, "value", "3");
            __builder.AddContent(77, "Lise");
            __builder.CloseElement();
            __builder.AddMarkupContent(78, "\r\n                            ");
            __builder.OpenElement(79, "option");
            __builder.AddAttribute(80, "value", "4");
            __builder.AddMarkupContent(81, "Meslek Yüksek Okulu");
            __builder.CloseElement();
            __builder.AddMarkupContent(82, "\r\n                            ");
            __builder.OpenElement(83, "option");
            __builder.AddAttribute(84, "value", "5");
            __builder.AddMarkupContent(85, "Üniversite");
            __builder.CloseElement();
            __builder.AddMarkupContent(86, "\r\n                            ");
            __builder.OpenElement(87, "option");
            __builder.AddAttribute(88, "value", "6");
            __builder.AddMarkupContent(89, "Yüksek Lisans");
            __builder.CloseElement();
            __builder.AddMarkupContent(90, "\r\n                            ");
            __builder.OpenElement(91, "option");
            __builder.AddAttribute(92, "value", "7");
            __builder.AddContent(93, "Doktora");
            __builder.CloseElement();
            __builder.AddMarkupContent(94, "\r\n                        ");
            __builder.CloseElement();
            __builder.AddMarkupContent(95, "\r\n                    ");
            __builder.CloseElement();
            __builder.AddMarkupContent(96, "\r\n                ");
            __builder.CloseElement();
            __builder.AddMarkupContent(97, "\r\n                ");
            __builder.AddMarkupContent(98, @"<div class=""form-group row"">
                    <label for=""schoolName"" class=""col-sm-3 col-form-label"">Okul</label>
                    <div class=""col-sm-7"">
                        <input type=""text"" class=""form-control"" id=""schoolName"" placeholder=""Okulunuzun adı"" required>
                    </div>
                </div>
                ");
            __builder.AddMarkupContent(99, @"<div class=""form-group row"">
                    <label for=""department"" class=""col-sm-3 col-form-label"">Bölüm</label>
                    <div class=""col-sm-7"">
                        <input type=""text"" class=""form-control"" id=""department"" placeholder=""Bölümünüz"" required>
                    </div>
                </div>
                ");
            __builder.AddMarkupContent(100, @"<div class=""form-group row"">
                    <label for=""startingDate"" class=""col-sm-3 col-form-label"">Başlama Tarihi</label>
                    <div class=""col-sm-7"">
                        <input required type=""date"" class=""form-control"" id=""startingDate"">
                    </div>
                </div>
                ");
            __builder.AddMarkupContent(101, @"<div class=""form-group row"">
                    <label for=""graDate"" class=""col-sm-3 col-form-label"">Mezuniyet Tarihi</label>
                    <div class=""col-sm-7"">
                        <input required type=""date"" class=""form-control"" id=""graDate"">
                    </div>
                </div>
            ");
            __builder.CloseElement();
            __builder.AddMarkupContent(102, "\r\n        ");
            __builder.CloseElement();
            __builder.AddMarkupContent(103, "\r\n        ");
            __builder.AddMarkupContent(104, @"<div class=""bd-example col-6"">
            <strong>İletişim Bilgileri</strong><hr>
            <form>
                <div class=""form-group row"">
                    <label for=""phonNumber"" class=""col-sm-3 col-form-label"">Telefon Numarası</label>
                    <div class=""col-sm-7"">
                        <input type=""tel"" class=""form-control"" id=""phonNumber"" placeholder=""(000) 000 000 00 00"" required>
                    </div>
                </div>
                <div class=""form-group row"">
                    <label for=""eMail"" class=""col-sm-3 col-form-label"">E-Posta</label>
                    <div class=""col-sm-7"">
                        <input type=""email"" class=""form-control"" id=""eMail"" placeholder=""E-Mail adresiniz"" required>
                    </div>
                </div>
                <div class=""form-group row"">
                    <label for=""address"" class=""col-sm-3 col-form-label"">Adres</label>
                    <div class=""col-sm-7"">
                        <textarea required class=""form-control"" placeholder=""Ev adresiniz..."" id=""address"" rows=""3""></textarea>
                    </div>
                </div>
            </form>
        </div>
        ");
            __builder.OpenElement(105, "div");
            __builder.AddAttribute(106, "class", "bd-example col-6");
            __builder.AddMarkupContent(107, "\r\n            ");
            __builder.AddMarkupContent(108, "<strong>DİĞER</strong><hr>\r\n            ");
            __builder.OpenElement(109, "form");
            __builder.AddMarkupContent(110, "\r\n                ");
            __builder.AddMarkupContent(111, @"<div class=""form-group row"">
                    <label for=""foreignLanguage"" class=""col-sm-3 col-form-label"">Yabancı Dil</label>
                    <div class=""col-sm-7"">
                        <input type=""text"" class=""form-control"" id=""foreignLanguage"" placeholder=""Yabancı Dil"" required>
                    </div>
                </div>
                ");
            __builder.OpenElement(112, "div");
            __builder.AddAttribute(113, "class", "form-group row");
            __builder.AddMarkupContent(114, "\r\n                    ");
            __builder.AddMarkupContent(115, "<label for=\"foLangLevel\" class=\"col-sm-3 col-form-label\">Seviye</label>\r\n                    ");
            __builder.OpenElement(116, "div");
            __builder.AddAttribute(117, "class", "col-sm-7");
            __builder.AddMarkupContent(118, "\r\n                        ");
            __builder.OpenElement(119, "select");
            __builder.AddAttribute(120, "required", true);
            __builder.AddAttribute(121, "id", "foLangLevel");
            __builder.AddAttribute(122, "class", "form-control");
            __builder.AddMarkupContent(123, "\r\n                            ");
            __builder.OpenElement(124, "option");
            __builder.AddAttribute(125, "selected", true);
            __builder.AddAttribute(126, "disabled", true);
            __builder.AddMarkupContent(127, "Seçiniz");
            __builder.CloseElement();
            __builder.AddMarkupContent(128, "\r\n                            ");
            __builder.OpenElement(129, "option");
            __builder.AddAttribute(130, "value", "1");
            __builder.AddMarkupContent(131, "Başlangıç");
            __builder.CloseElement();
            __builder.AddMarkupContent(132, "\r\n                            ");
            __builder.OpenElement(133, "option");
            __builder.AddAttribute(134, "value", "2");
            __builder.AddContent(135, "Orta");
            __builder.CloseElement();
            __builder.AddMarkupContent(136, "\r\n                            ");
            __builder.OpenElement(137, "option");
            __builder.AddAttribute(138, "value", "3");
            __builder.AddMarkupContent(139, "İleri");
            __builder.CloseElement();
            __builder.AddMarkupContent(140, "\r\n                        ");
            __builder.CloseElement();
            __builder.AddMarkupContent(141, "\r\n                    ");
            __builder.CloseElement();
            __builder.AddMarkupContent(142, "\r\n                ");
            __builder.CloseElement();
            __builder.AddMarkupContent(143, "\r\n                ");
            __builder.AddMarkupContent(144, @"<div class=""form-group row"">
                    <label for=""competences"" class=""col-sm-3 col-form-label"">Yeterlilikler</label>
                    <div class=""col-sm-7"">
                        <textarea required class=""form-control"" placeholder=""Yeterlilik-Seviye"" id=""competences"" rows=""2""></textarea>
                    </div>
                </div>
                ");
            __builder.AddMarkupContent(145, @"<div class=""form-group row"">
                    <label for=""references"" class=""col-sm-3 col-form-label"">Referanslar</label>
                    <div class=""col-sm-7"">
                        <textarea required class=""form-control"" placeholder=""İsim-Numara"" id=""references"" rows=""2""></textarea>
                    </div>
                </div>
            ");
            __builder.CloseElement();
            __builder.AddMarkupContent(146, "\r\n        ");
            __builder.CloseElement();
            __builder.AddMarkupContent(147, "\r\n        <input style=\"font-weight: bold\" class=\"btn btn-primary\" type=\"submit\" value=\"Güncelle\">\r\n    ");
            __builder.CloseElement();
        }
        #pragma warning restore 1998
    }
}
#pragma warning restore 1591
