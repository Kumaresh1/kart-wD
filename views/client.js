const socket=io("http://localhost:3001")

socket.on('users',data=>{
    console.log(data);

    socket.emit("gethi","hii da");
});

const a=prompt("hii")

socket.on('messageall',data=>{
    console.log("all",data);

});