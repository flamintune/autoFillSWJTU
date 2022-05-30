let grade = document.getElementsByTagName('button')[0]
let submit = document.getElementsByTagName('button')[1]
function sendMessagetoContentJS(message, callback) {
    chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        },
        tabs => {
            chrome.tabs.sendMessage(
                tabs[0].id,
                message,
                response => {
                    if (callback)
                        callback(response)
                }
            )
        }
    )
}
grade.onclick = async function (e) {
    let message = {
        info: "grade"
    }
    sendMessagetoContentJS(message,res=>{
        console.log('评价成功辣')
    })
}
submit.onclick = async function(){
    let message = {
        info:"submit"
    }
    sendMessagetoContentJS(message,res=>{
        console.log('提交成功啦')
    })
}