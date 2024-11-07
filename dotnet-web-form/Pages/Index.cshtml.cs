using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

public class IndexModel : PageModel
{
    [BindProperty]
    public string? UserName { get; set; }

    public void OnPost()
    {
        // Display the greeting only if a name is entered
        if (!string.IsNullOrEmpty(UserName))
        {
            UserName = $"{UserName}";
        }
    }
}