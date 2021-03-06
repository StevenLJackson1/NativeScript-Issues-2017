"use strict";
var main_view_model_1 = require("./main-view-model");
var cameraModule = require("nativescript-camera");
var ImageSourceModule = require("image-source");
var viewModel = new main_view_model_1.HelloWorldModel();
function navigatingTo(args) {
    var page = args.object;
    cameraModule.requestPermissions();
    page.bindingContext = viewModel;
}
exports.navigatingTo = navigatingTo;
function takePhoto() {
    cameraModule.takePicture({
        width: 1280, height: 720, keepAspectRatio: false, saveToGallery: false
    }).then(function (imageAsset) {
        console.log("Result is an image asset instance");
        viewModel.set("BoardingPassSource", imageAsset);
        var image = ImageSourceModule.fromNativeSource(imageAsset);
        console.log("image.android -> " + image.android);
        // var folder = fs.knownFolders.documents();
        // var path = fs.path.join(folder.path, "Test.png");
        // image.saveToFile(path, "jpeg");
        var base64 = image.toBase64String("jpeg"); // throws here
    }).catch(function (err) {
        console.log("Error -> " + err.message);
    });
}
exports.takePhoto = takePhoto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxxREFBb0Q7QUFDcEQsa0RBQW9EO0FBQ3BELGdEQUFrRDtBQUdsRCxJQUFJLFNBQVMsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUV0QyxzQkFBNkIsSUFBZTtJQUN4QyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRTdCLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBRWxDLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0FBQ3BDLENBQUM7QUFORCxvQ0FNQztBQUVEO0lBQ0ksWUFBWSxDQUFDLFdBQVcsQ0FBQztRQUNyQixLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSztLQUN6RSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsVUFBVTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUNqRCxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRWhELElBQUksS0FBSyxHQUFrQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUxRixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCw0Q0FBNEM7UUFDNUMsb0RBQW9EO1FBQ3BELGtDQUFrQztRQUVsQyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsY0FBYztJQUU3RCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQW5CRCw4QkFtQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgSGVsbG9Xb3JsZE1vZGVsIH0gZnJvbSAnLi9tYWluLXZpZXctbW9kZWwnO1xuaW1wb3J0ICogYXMgY2FtZXJhTW9kdWxlIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XG5pbXBvcnQgKiBhcyBJbWFnZVNvdXJjZU1vZHVsZSBmcm9tIFwiaW1hZ2Utc291cmNlXCI7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZmlsZS1zeXN0ZW1cIjtcblxubGV0IHZpZXdNb2RlbCA9IG5ldyBIZWxsb1dvcmxkTW9kZWwoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuXG4gICAgY2FtZXJhTW9kdWxlLnJlcXVlc3RQZXJtaXNzaW9ucygpO1xuXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZpZXdNb2RlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRha2VQaG90bygpIHtcbiAgICBjYW1lcmFNb2R1bGUudGFrZVBpY3R1cmUoe1xuICAgICAgICB3aWR0aDogMTI4MCwgaGVpZ2h0OiA3MjAsIGtlZXBBc3BlY3RSYXRpbzogZmFsc2UsIHNhdmVUb0dhbGxlcnk6IGZhbHNlXG4gICAgfSkudGhlbihpbWFnZUFzc2V0ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bHQgaXMgYW4gaW1hZ2UgYXNzZXQgaW5zdGFuY2VcIik7XG4gICAgICAgIHZpZXdNb2RlbC5zZXQoXCJCb2FyZGluZ1Bhc3NTb3VyY2VcIiwgaW1hZ2VBc3NldCk7XG5cbiAgICAgICAgdmFyIGltYWdlID0gPEltYWdlU291cmNlTW9kdWxlLkltYWdlU291cmNlPkltYWdlU291cmNlTW9kdWxlLmZyb21OYXRpdmVTb3VyY2UoaW1hZ2VBc3NldCk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcImltYWdlLmFuZHJvaWQgLT4gXCIgKyBpbWFnZS5hbmRyb2lkKTtcbiAgICAgICAgLy8gdmFyIGZvbGRlciA9IGZzLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgICAgICAgLy8gdmFyIHBhdGggPSBmcy5wYXRoLmpvaW4oZm9sZGVyLnBhdGgsIFwiVGVzdC5wbmdcIik7XG4gICAgICAgIC8vIGltYWdlLnNhdmVUb0ZpbGUocGF0aCwgXCJqcGVnXCIpO1xuXG4gICAgICAgIHZhciBiYXNlNjQgPSBpbWFnZS50b0Jhc2U2NFN0cmluZyhcImpwZWdcIik7IC8vIHRocm93cyBoZXJlXG5cbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIC0+IFwiICsgZXJyLm1lc3NhZ2UpO1xuICAgIH0pO1xufSJdfQ==