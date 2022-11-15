
WebUtil.LaunchBrowser "CHROME"

Set myBrowser = Browser("creationtime:=0")
myBrowser.Navigate Parameter("URL")
myBrowser.Sync

AIUtil.SetContext myBrowser
AIUtil("search").Search Parameter("SearchTerm")

AIUtil.FindText(Parameter("SearchTerm"), micFromTop, 1).CheckExists true




