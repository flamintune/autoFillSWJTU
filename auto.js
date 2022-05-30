
chrome.runtime.onMessage.addListener((request, sender, sendResponses) => {
    console.log(sender)
    console.log(request.info)
    sendResponses('收到惹')
    let formFrame = document.getElementById('WindowFrame8') ?? document.getElementById('WindowFrame3')
    if (request.info == 'grade') {

        let answerDiv = formFrame.contentWindow.document.getElementsByClassName('answerDiv')
        let answerTextarea = formFrame.contentWindow.document.getElementsByTagName('textarea');
        for (let i = 0; i < 16; ++i)
            answerDiv[i].children[0].children[0].click();
        for (let i = 0; i < 2; ++i)
            answerTextarea[i].value = '...'

    }
    else if (request.info == 'submit') {
        // time = 0
        let inputSubmit = formFrame.contentWindow.document.getElementsByTagName('table')[0].getElementsByTagName('tr')[1].getElementsByTagName('td')[0].children[0]
        console.log(inputSubmit)
        inputSubmit.click()
    }
})