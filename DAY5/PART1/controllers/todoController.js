function getTodos(req,res){
   res.status(200).json({
    success:true,
    message:"Todo controller working"
   });
}

module.exports={
    getTodos
};