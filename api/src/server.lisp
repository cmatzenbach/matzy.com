(ql:quickload :ningle)
;; now ningle is installed and we need to install clack which is an analog of WSGI
;; stack from python
(ql:quickload :clack)

(defvar *app* (make-instance 'ningle:<app>))

(setf (ningle:route *app* "/")
      "Speak friend and enter")

(defvar *server* nil
  "this variable will store currently running server instance.")

(defun start ()
  (if *server*
      (format t "Server already started")
      (setf *server*
            (clack:clackup *app*))))

(defun stop ()
  (if *server*
      (clack:stop *server*)
      (format t "Server is not running")))
