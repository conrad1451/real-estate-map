# NOTE: This script must be run directly in PowerShell (e.g., .\tree-generator.ps1)

# Configuration: Directories and files to ignore
$global:IGNORE_LIST = @(
    "node_modules",
    ".git",
    ".next",
    "out", 
    "dist",
    "build",
    ".DS_Store",
    "tree-generator.ps1" # Ignore the script itself
)

<#
.SYNOPSIS
    Recursively builds and prints a file tree structure.
.PARAMETER Path
    The path of the directory to start traversing.
.PARAMETER Indent
    The current indentation string used for formatting.
#>
function Get-FileTree {
    param(
        [Parameter(Mandatory=$true)]
        [string]$Path,

        [string]$Indent = ""
    )
    
    # Get all items in the current directory, excluding the hidden ones by default
    $Items = Get-ChildItem -Path $Path -Force | Where-Object { 
        # Exclude directories/files on the IGNORE_LIST
        -not ($global:IGNORE_LIST -contains $_.Name) 
    } | Sort-Object Name

    $Total = $Items.Count
    $Counter = 0

    foreach ($Item in $Items) {
        $Counter++
        $IsLast = ($Counter -eq $Total)
        
        # Select the correct connector characters
        if ($IsLast) {
            $Connector = "\--- "
            $NextIndent = $Indent + "    "
        } else {
            $Connector = "+--- "
            $NextIndent = $Indent + "|   "
        }

        # Print the current item
        $TypeIndicator = if ($Item.PSIsContainer) { "/" } else { "" }
        Write-Host "$Indent$Connector$($Item.Name)$TypeIndicator"

        # If the item is a directory, recurse
        if ($Item.PSIsContainer) {
            Get-FileTree -Path $Item.FullName -Indent $NextIndent
        }
    }
}

# --- Main Execution ---
$RootDir = (Get-Location).Path
$RootName = (Get-Item $RootDir).Name

Write-Host "$RootName/"
Get-FileTree -Path $RootDir
Write-Host "`nTree generation complete."
