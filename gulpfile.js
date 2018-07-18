let gulp = require("gulp");
let sftp = require("gulp-sftp");
gulp.task("sftp", function() {
	return gulp.src("./dist/**").pipe(
		sftp({
			host: "",
			port: "",
			remotePath: "",
			user: "",
			pass: ""
		})
	);
});
