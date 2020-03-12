;;;; api.asd
;;;; This file has the definition of the lisp systems in it
;;;; Systems are somewhat equivalent to libraries
;;;; This is the de-facto standard for CL these days

(asdf:defsystem #:api
  :description "Describe api here"
  :author "Your Name <your.name@example.com>"
  :license  "Specify license here"
  :version "0.0.1"
  :serial t
  :depends-on ("huchentoot" "hunchentoot-test" "cl-who")
  ;; the files that are involved in our system
  :components ((:file "package")
               (:file "api")))
