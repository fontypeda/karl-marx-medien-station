Sub Main()


reg = CreateObject("roRegistrySection", "networking")
reg.write("ssh","22")

n=CreateObject("roNetworkConfiguration", 0)

n.SetLoginPassword("password")
n.Apply()
reg.flush()

msgPort = CreateObject("roMessagePort")
r = CreateObject("roRectangle", 0, 0, 1920, 1080)

config = {
url: "file:///index.html",
mouse_enabled: true
}
h = CreateObject("roHtmlWidget", r, config)
h.SetPort(msgPort)
sleep(1000)
h.Show()
while true
    msg = wait(0, msgPort)
    print "type(msg)=";type(msg)
    if type(msg) = "roHtmlWidgetEvent" then
        eventData = msg.GetData()
        if type(eventData) = "roAssociativeArray" and type(eventData.reason) = "roString" then
            print "reason = ";eventData.reason
            if eventData.reason = "load-error" then
                print "message = ";eventData.message
            endif
        endif
    endif
end while
End Sub
